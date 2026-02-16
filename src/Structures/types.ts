export const SECTION_KEYS = {
  TERMS: 'terms',
  PRIVACY: 'privacy',
  LEGAL: 'legal',
  SUPPORT: 'support',
} as const;

export type SectionKey =
  typeof SECTION_KEYS[keyof typeof SECTION_KEYS];

export interface NavItem {
  key: SectionKey;
  label: string;
  icon: string;
}
