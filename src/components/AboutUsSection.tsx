import React from 'react';
import Image from 'next/image';
import { FaCamera, FaAward, FaClock } from 'react-icons/fa';

interface AboutUsSectionProps {
  studioName?: string;
  yearsOfExperience?: number;
  teamPhotoUrl?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  studioName = 'סטודיו ooo',
  yearsOfExperience = 15,
  teamPhotoUrl = '/studio-team.jpg',
}) => {
  return (
    <section className="about-us-section bg-light-cream py-16 text-right" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              אודותינו
            </h2>
            
            <p className="text-gray-800 mb-6 leading-relaxed">
              ברוכים הבאים ל<span className="font-bold text-primary">{studioName}</span>, 
              סטודיו מוביל לצילום אופנה עם ניסיון של {yearsOfExperience} שנים בתעשייה. 
              הסטודיו שלנו נוסד מתוך אהבה לאומנות הצילום והשאיפה ליצור תמונות שמספרות סיפור.
            </p>
            
            <p className="text-gray-800 mb-8 leading-relaxed">
              לאורך השנים, פיתחנו גישה ייחודית המשלבת טכניקות צילום מסורתיות עם חדשנות דיגיטלית, 
              מה שמאפשר לנו להעניק ללקוחותינו תוצאות יוצאות דופן שעומדות בסטנדרטים הגבוהים ביותר של עולם האופנה.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <FaCamera className="text-primary text-3xl mb-4" />
                <h3 className="font-bold text-lg mb-2">מקצועיות</h3>
                <p className="text-gray-700">צוות צלמים מנוסה עם עין חדה לפרטים ויצירתיות ללא גבולות</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <FaAward className="text-primary text-3xl mb-4" />
                <h3 className="font-bold text-lg mb-2">איכות</h3>
                <p className="text-gray-700">ציוד מתקדם וטכניקות עדכניות להבטחת תוצאות מושלמות בכל פרויקט</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <FaClock className="text-primary text-3xl mb-4" />
                <h3 className="font-bold text-lg mb-2">שירות</h3>
                <p className="text-gray-700">ליווי אישי ומקצועי מהרעיון הראשוני ועד לתוצר הסופי</p>
              </div>
            </div>
            
            <p className="text-gray-800 leading-relaxed">
              אנו מאמינים שכל לקוח הוא ייחודי, ולכן אנו מתאימים את הגישה שלנו לצרכים הספציפיים של כל פרויקט. 
              בין אם מדובר בקמפיין פרסומי, קטלוג אופנה, או צילומי תדמית - הצוות המקצועי שלנו כאן כדי להפוך את החזון שלכם למציאות מרהיבה.
            </p>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-secondary">
              <Image
                src={teamPhotoUrl}
                alt={`צוות ${studioName}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">הצוות שלנו</h3>
                <p className="text-white text-sm md:text-base">
                  צוות מקצועי עם ניסיון של {yearsOfExperience} שנים בתעשיית צילום האופנה
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;