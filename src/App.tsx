import { useCallback, useMemo, useState } from "react";
import { MOTORCYCLES } from "./data/motorcycles";
import type { Motorcycle } from "./data/motorcycles";
import { BookingModal } from "./components/BookingModal";
import { Catalog } from "./components/Catalog";
import { ExperienceStrip } from "./components/ExperienceStrip";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const brands = useMemo(
    () => [...new Set(MOTORCYCLES.map((m) => m.brand))].sort(),
    []
  );
  const [brand, setBrand] = useState<string | "all">("all");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingBike, setBookingBike] = useState<Motorcycle | null>(null);

  const filtered = useMemo(
    () =>
      brand === "all"
        ? MOTORCYCLES
        : MOTORCYCLES.filter((m) => m.brand === brand),
    [brand]
  );

  const openBooking = useCallback((bike: Motorcycle | null) => {
    setBookingBike(bike);
    setBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setBookingOpen(false);
  }, []);

  return (
    <>
      <a className="skip-link" href="#catalog">
        Перейти к каталогу
      </a>
      <Header onBook={() => openBooking(null)} />
      <main>
        <Hero
          onBrowse={() =>
            document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <ExperienceStrip />
        <Catalog
          motorcycles={filtered}
          brands={brands}
          selectedBrand={brand}
          onBrandChange={setBrand}
          onReserve={openBooking}
        />
      </main>
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={closeBooking}
        bike={
          bookingBike
            ? { brand: bookingBike.brand, model: bookingBike.model }
            : null
        }
      />
    </>
  );
}

export default App;
