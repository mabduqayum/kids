export function getMessage(points: number): string {
  let rez: string;
  if (points < .5) {
    rez = 'next_time';
  } else if (points < .65) {
    rez = 'good';
  } else if (points < .75) {
    rez = 'well_done';
  } else if (points < 1) {
    rez = 'excellent';
  } else {
    rez = 'perfect';
  }
  return rez;
}
