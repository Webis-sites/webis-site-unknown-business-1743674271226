'use client';

import React from 'react';
import { FaCamera, FaPortrait, FaImages, FaShoppingBag, FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price?: string;
  learnMoreLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, learnMoreLink }) => {
  return (
    <motion.div 
      className="bg-secondary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-primary text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {price && <p className="font-semibold mb-3">החל מ-{price}</p>}
        {learnMoreLink && (
          <a 
            href={learnMoreLink} 
            className="inline-block bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-300"
          >
            למידע נוסף
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <FaCamera />,
      title: "צילומי אופנה אדיטוריאל",
      description: "צילומים אמנותיים ויצירתיים לכתבות אופנה במגזינים ופלטפורמות דיגיטליות, המשלבים קונספט ייחודי וסיפור חזותי.",
      price: "₪2,500",
      learnMoreLink: "/services/editorial"
    },
    {
      icon: <FaImages />,
      title: "צילומי לוקבוק",
      description: "צילום מקצועי של קולקציות אופנה להצגת הפריטים באופן ברור ואטרקטיבי לקטלוגים ואתרי מכירות.",
      price: "₪1,800",
      learnMoreLink: "/services/lookbook"
    },
    {
      icon: <FaPortrait />,
      title: "תיקי עבודות לדוגמנים",
      description: "סדרת צילומים מקצועית ליצירת פורטפוליו איכותי לדוגמנים מתחילים ומנוסים, כולל מגוון סגנונות וקונספטים.",
      price: "₪1,200",
      learnMoreLink: "/services/portfolio"
    },
    {
      icon: <FaShoppingBag />,
      title: "צילומי אופנה מסחריים",
      description: "צילומים מקצועיים למותגי אופנה לשימוש בפרסום, שיווק ומדיה חברתית, עם דגש על הצגת המוצר בצורה אופטימלית.",
      price: "₪3,000",
      learnMoreLink: "/services/commercial"
    },
    {
      icon: <FaVideo />,
      title: "צילומי קמפיין",
      description: "הפקות צילום מלאות לקמפיינים שיווקיים של מותגי אופנה, כולל קונספט, סטיילינג, לוקיישן ייחודי וצוות מקצועי.",
      price: "₪5,000",
      learnMoreLink: "/services/campaign"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            סטודיו ooo מציע מגוון שירותי צילום אופנה ברמה הגבוהה ביותר, מותאמים לצרכים הייחודיים של כל לקוח ולקוח
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="/contact"
            className="inline-block bg-primary text-white py-3 px-8 rounded-md hover:bg-primary/90 transition-colors duration-300 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            צור קשר לתיאום פגישת ייעוץ
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;