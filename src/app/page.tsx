import { Hero } from '@/components/hero';
import { TdsNavigator } from '@/components/tds-navigator';
import { ComplianceAlerts } from '@/components/compliance-alerts';
import { ExpertConnect } from '@/components/expert-connect';
import tdsData from '@/lib/tds-rates.json';

export default function Home() {
  const typedTdsData = tdsData.tdsRates as any[];
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        <TdsNavigator allRates={typedTdsData} />
        <ComplianceAlerts />
      </main>

      <ExpertConnect />

      <footer className="w-full text-center p-6 text-muted-foreground mt-8">
        <p>&copy; {new Date().getFullYear()} CA Tanmay. All rights reserved.</p>
        <p className="text-xs mt-1">
          Designed & Developed for TDS Rate Navigation
        </p>
      </footer>
    </div>
  );
}
