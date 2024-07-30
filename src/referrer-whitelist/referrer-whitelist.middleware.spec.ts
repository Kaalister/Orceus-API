import { ReferrerWhitelistMiddleware } from './referrer-whitelist.middleware';

describe('ReferrerWhitelistMiddleware', () => {
  it('should be defined', () => {
    expect(new ReferrerWhitelistMiddleware()).toBeDefined();
  });
});
