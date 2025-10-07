"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  open(): void;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

export default function Order() {
  const images = ["/ct1.png", "/ct2.png", "/ct3.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const productPrice = 5499;
  const totalAmount = quantity * productPrice;

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  useEffect(() => {
    if (window.Razorpay) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const createOrder = async () => {
    try {
      const response = await fetch("/api/razorpayOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount * 100 }),
      });
      if (!response.ok) throw new Error("Failed to create order");
      return await response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded.");
      return;
    }

    const order = await createOrder();
    if (!order) {
      alert("Failed to create order.");
      return;
    }

    const options: RazorpayOptions = {
      key: "rzp_live_Ewc7ecKE3hyWm9",
      amount: order.amount,
      currency: order.currency,
      name: "Kisan Mithraa Mobile Starter",
      description: "Purchase",
      order_id: order.id,
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: customer.name,
        email: customer.email,
        contact: customer.contact,
      },
      theme: { color: "#6BAF92" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleNext = () =>
    setCurrentImageIndex((i) => (i + 1) % images.length);
  const handlePrev = () =>
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      {...handlers}
      className="relative w-full  text-gray-900 py-16 px-4 lg:px-20 flex flex-col lg:flex-row gap-10"
    >
      {/* Slider */}
      <div className="lg:w-1/2 flex flex-col items-center relative">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  width={500}
                  height={300}
                  className="w-full "
                  priority
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.3 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-3 shadow-lg"
          >
            <ChevronLeft size={30} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.3 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-3 shadow-lg"
          >
            <ChevronRight size={30} />
          </motion.button>
        </div>

        {/* Thumbnails with overlay */}
        <div className="flex gap-2 mt-4 relative">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setCurrentImageIndex(idx)}
              whileHover={{ scale: 1.15 }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
              <motion.div
                className="absolute inset-0 border-2 border-green-500 rounded-lg"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: currentImageIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details with slide-in */}
      <motion.div
        className="lg:w-1/2 flex flex-col gap-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Kisan Mithraa Mobile Starter
        </motion.h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {[
            "Remote motor control via mobile/SMS",
            "Dry run protection with auto-restart",
            "Timer modes: Clock, cyclic, multi-slot",
            "Voltage, overload, and drain settings",
            "Real-time alerts for ON/OFF and faults",
            "Multi-language support",
            "Battery backup for power outages",
            "1-year replacement guarantee",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="text-2xl font-semibold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          MRP: ₹{productPrice} (INCL. OF ALL TAXES)
        </motion.p>

        {/* Liquid hover button */}
        <motion.button
          onClick={() => setShowForm((s) => !s)}
          className="px-6 py-3 font-semibold rounded-lg shadow text-white relative overflow-hidden bg-[#6BAF92]  hover:bg-[#5EA785]"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="absolute inset-0 bg-white opacity-20"
            whileHover={{ scale: 1.5, opacity: 0.4 }}
            transition={{ duration: 0.5 }}
          />
          {showForm ? "Close Form" : "Buy Now"}
        </motion.button>

        {/* Form with animated inputs */}
        {showForm && (
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              handlePayment();
            }}
            className="flex flex-col gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {["name", "email", "contact", "address"].map((field, i) => (
              <motion.input
                key={i}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={customer[field as keyof typeof customer]}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    [field]: e.target.value,
                  })
                }
                required
                className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              />
            ))}

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 bg-gray-200 rounded-full font-bold"
              >
                −
              </motion.button>
              <motion.span
                key={quantity}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {quantity}
              </motion.span>
              <motion.button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1 bg-gray-200 rounded-full font-bold"
              >
                +
              </motion.button>
            </div>

            <motion.p
              className="text-xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Total: ₹{totalAmount}
            </motion.p>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition"
            >
              Proceed to Pay
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
