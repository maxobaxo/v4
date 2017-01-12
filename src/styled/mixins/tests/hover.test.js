import { defaultProps, hover, hoverFocus, hoverFocusActive, plainHoverFocus } from '../hover';

describe('bootstrap hover mixins', () => {
  it('hover should return a css', () => {
    const css = hover(`
      cursor: pointer;
      opacity: .5;
    `);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:hover { \n      cursor: pointer;\n      opacity: .5;\n     }\n  ');
  });
  it('hoverFocus should return a css without media query', () => {
    const css = hoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus,\n    &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocusActive should return a css without media query', () => {
    const css = hoverFocusActive(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n    &:focus, &:active, &:hover {\n     cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('plainHoverFocus should return a css without media query', () => {
    const css = plainHoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n    &, &:focus, &:hover {\n      cursor: pointer;\n      opacity: .5;\n    }\n  ');
  });
  it('hoverFocus should return a css with media query', () => {
    const css = hoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual(' \n      &:focus { cursor: pointer;\n      opacity: .5; }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('hoverFocusActive should return a css with media query', () => {
    const css = hoverFocusActive(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &:focus,\n      &:active {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
  it('plainHoverFocus should return a css with media query', () => {
    const css = plainHoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toEqual('\n      &, &:focus {\n        cursor: pointer;\n      opacity: .5;\n      }\n      \n    &:hover { cursor: pointer;\n      opacity: .5; }\n  \n    ');
  });
});