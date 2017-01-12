import { fromJS } from 'immutable';
import { defaultProps, getFloatUtilities } from '../float';

describe('bootstrap float utility', () => {
  it('getFloatUtilities should return a list of css utilities', () => {
    const css = getFloatUtilities(defaultProps['$grid-breakpoints']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-463111699);
  });
});