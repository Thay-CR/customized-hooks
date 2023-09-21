export interface DateCalculator {
    today: Date | null;
    tomorrow: Date | null;
    yesterday: Date | null;
    futureDate: Date | null;
    pastDate: Date | null;
    setDaysToChange: React.Dispatch<React.SetStateAction<number>>;
    getNextBusinessDaysFromDate: (date: Date, days: number) => Date;
  }