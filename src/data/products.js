// src/data/products.js
import pdfBusiness from "../assets/pdf-business.jpg";
import pdfExitPlan from "../assets/pdf-exit-plan.png";
import pdfSideHustles from "../assets/pdf-side-hustles.jpg";

import img1 from "../assets/pdf-mpesa-business.jpg";
import img2 from "../assets/pdf-digital-marketing.jpg";
import img3 from "../assets/pdf-kra-tax.jpg";
import img4 from "../assets/pdf-gov-tenders.jpg";
import img5 from "../assets/pdf-boda-business.jpg";
import img6 from "../assets/pdf-airbnb.jpg";
import img7 from "../assets/pdf-event-planning.jpg";
import img8 from "../assets/pdf-agri-export.jpg";
import img9 from "../assets/pdf-salon.jpg";
import img10 from "../assets/pdf-carwash.jpg";
import img11 from "../assets/pdf-online-teaching.png";
import img12 from "../assets/pdf-poultry.jpg";
import img13 from "../assets/pdf-insta-growth.jpg";
import img14 from "../assets/pdf-mitumba-biz.jpg";
import img15 from "../assets/pdf-biz-loan.jpg";
import img16 from "../assets/pdf-mobile-app.jpg";
import img17 from "../assets/pdf-finance-hustlers.jpg";

// Import the actual PDFs
import pdf1 from "../assets/pdfs/how-to-start-a-business.pdf";
import pdf2 from "../assets/pdfs/exit-plan.pdf";
import pdf3 from "../assets/pdfs/side-hustles.pdf";
import pdf4 from "../assets/pdfs/mpesa-business-blueprint.pdf";
import pdf5 from "../assets/pdfs/digital-marketing-smes.pdf";
import pdf6 from "../assets/pdfs/kra-tax-filing.pdf";
import pdf7 from "../assets/pdfs/agpo-tenders.pdf";
import pdf8 from "../assets/pdfs/boda-boda-mastery.pdf";
import pdf9 from "../assets/pdfs/airbnb-profit-guide.pdf";
import pdf10 from "../assets/pdfs/event-planning-budget.pdf";
import pdf11 from "../assets/pdfs/export-agriculture.pdf";
import pdf12 from "../assets/pdfs/salon-success-kit.pdf";
import pdf13 from "../assets/pdfs/car-wash-starter.pdf";
import pdf14 from "../assets/pdfs/online-teaching-kenya.pdf";
import pdf15 from "../assets/pdfs/poultry-farming.pdf";
import pdf16 from "../assets/pdfs/instagram-growth.pdf";
import pdf17 from "../assets/pdfs/mitumba-mastery.pdf";
import pdf18 from "../assets/pdfs/business-loan-guide.pdf";
import pdf19 from "../assets/pdfs/mobile-app-no-code.pdf";
import pdf20 from "../assets/pdfs/personal-finance-hustlers.pdf";

export const products = [
  {
    id: 1,
    title: "How to Start a Business",
    description: "A complete guide to launching your business in Kenya with practical steps and templates.",
    price: "KES 299",
    image: pdfBusiness,
    pdf: pdf1, // ← Real PDF file
  },
  {
    id: 2,
    title: "How to Leave Your Job with an Exit Plan",
    description: "Strategic planning guide for a smooth career transition into entrepreneurship.",
    price: "KES 399",
    image: pdfExitPlan,
    pdf: pdf2,
  },
  {
    id: 3,
    title: "Side Hustles That Work",
    description: "Proven side hustle ideas and strategies to grow your income in Kenya.",
    price: "KES 249",
    image: pdfSideHustles,
    pdf: pdf3,
  },
  {
    id: 4,
    title: "M-Pesa Business Blueprint",
    description: "Turn your phone into a cash machine – step-by-step guide to building a profitable M-Pesa agency or sub-agency.",
    price: "KES 349",
    image: img1,
    pdf: pdf4,
  },
  {
    id: 5,
    title: "Digital Marketing for Kenyan SMEs",
    description: "Master Facebook Ads, WhatsApp Business, and Google My Business to get customers without a big budget.",
    price: "KES 279",
    image: img2,
    pdf: pdf5,
  },
  {
    id: 6,
    title: "KRA Tax Filing Made Simple",
    description: "Avoid penalties – learn how to file iTax returns, claim deductions, and keep proper records for your hustle.",
    price: "KES 199",
    image: img3,
    pdf: pdf6,
  },
  {
    id: 7,
    title: "How to Get Government Tenders (AGPO)",
    description: "Win youth, women & disability contracts with AGPO registration, tender documents, and winning strategies.",
    price: "KES 499",
    image: img4,
    pdf: pdf7,
  },
  {
    id: 8,
    title: "Boda Boda Business Mastery",
    description: "From buying the right bike to route planning, insurance, and scaling a fleet – the full playbook.",
    price: "KES 229",
    image: img5,
    pdf: pdf8,
  },
  {
    id: 9,
    title: "Airbnb & Short-Let Profit Guide",
    description: "Convert your spare room or apartment into a money-making machine with pricing, photos, and guest management.",
    price: "KES 399",
    image: img6,
    pdf: pdf9,
  },
  {
    id: 10,
    title: "Event Planning on a Budget",
    description: "Plan weddings, corporate events, and birthdays profitably – vendor list, contracts, and pricing templates.",
    price: "KES 329",
    image: img7,
    pdf: pdf10,
  },
  {
    id: 11,
    title: "How to Export Agricultural Produce",
    description: "From farm to Europe/USA – standards, certifications, shipping, and buyer contacts for mangoes, avocados, etc.",
    price: "KES 549",
    image: img8,
    pdf: pdf11,
  },
  {
    id: 12,
    title: "Salon & Barber Shop Success Kit",
    description: "Marketing, staff training, inventory, and pricing to run a busy, profitable salon in any estate.",
    price: "KES 259",
    image: img9,
    pdf: pdf12,
  },
  {
    id: 13,
    title: "Car Wash Business Starter Pack",
    description: "Location tips, equipment list, water recycling, staff roles, and marketing to dominate your neighborhood.",
    price: "KES 219",
    image: img10,
    pdf: pdf13,
  },
  {
    id: 14,
    title: "Online Teaching & Tutoring in Kenya",
    description: "Create courses on Zoom, Google Classroom, and monetize via M-Pesa – perfect for teachers and experts.",
    price: "KES 299",
    image: img11,
    pdf: pdf14,
  },
  {
    id: 15,
    title: "How to Start a Poultry Farm (Layers & Broilers)",
    description: "Feed formulas, housing plans, disease control, and market linkages for consistent egg/meat profits.",
    price: "KES 379",
    image: img12,
    pdf: pdf15,
  },
  {
    id: 16,
    title: "Instagram Growth for Kenyan Brands",
    description: "Hashtags, reels, stories, and collaborations that get you 1,000+ real followers monthly.",
    price: "KES 249",
    image: img13,
    pdf: pdf16,
  },
  {
    id: 17,
    title: "Mitumba Business Mastery",
    description: "Sourcing bales, grading, pricing, and selling fast on WhatsApp groups and roadside stalls.",
    price: "KES 239",
    image: img14,
    pdf: pdf17,
  },
  {
    id: 18,
    title: "How to Get a Business Loan in Kenya",
    description: "KCB, Equity, Hustler Fund, and micro-finance – documents, pitch decks, and repayment plans that work.",
    price: "KES 299",
    image: img15,
    pdf: pdf18,
  },
  {
    id: 19,
    title: "Mobile App Idea to Launch (No Coding)",
    description: "Validate ideas, hire developers affordably, and launch on Google Play with monetization strategies.",
    price: "KES 449",
    image: img16,
    pdf: pdf19,
  },
  {
    id: 20,
    title: "Personal Finance for Hustlers",
    description: "Budgeting, emergency funds, investments, and debt payoff tailored for side-hustlers and entrepreneurs.",
    price: "KES 199",
    image: img17,
    pdf: pdf20,
  },
];