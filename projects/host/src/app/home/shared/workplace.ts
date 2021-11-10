export interface Workplace {
  company: string;
  city: string;
  state: string;
  position: string;
  activityDescription: string;
  startDate: Date | string;
  endDate?: Date | string;
}
