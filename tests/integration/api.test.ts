import { profileData } from '@/data/profile';

describe('API Integration Tests', () => {
  describe('Profile Data', () => {
    it('has valid personal info', () => {
      expect(profileData.personalInfo).toBeDefined();
      expect(profileData.personalInfo.name).toBe('Itrat Rubab');
      expect(profileData.personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('has experience entries', () => {
      expect(profileData.experience).toBeInstanceOf(Array);
      expect(profileData.experience.length).toBeGreaterThan(0);
    });

    it('has education entries', () => {
      expect(profileData.education).toBeInstanceOf(Array);
      expect(profileData.education.length).toBeGreaterThan(0);
    });

    it('has skills categorized correctly', () => {
      expect(profileData.skills).toBeInstanceOf(Array);
      const categories = profileData.skills.map((s) => s.category);
      expect(categories).toContain('frontend');
      expect(categories).toContain('backend');
      expect(categories).toContain('tools');
    });

    it('has language entries', () => {
      expect(profileData.languages).toBeInstanceOf(Array);
      expect(profileData.languages.length).toBeGreaterThan(0);
    });
  });

  describe('Contact Form Validation', () => {
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    it('validates correct email format', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('rejects invalid email format', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('missing@domain')).toBe(false);
      expect(validateEmail('@nodomain.com')).toBe(false);
    });
  });
});
