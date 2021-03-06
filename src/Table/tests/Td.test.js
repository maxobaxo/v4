/**
 * Testing our Td component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import Td from '../Td';
import Table from '../index';
import Tr from '../Tr';
import Tbody from '../Tbody';

const children = (<span>Test</span>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Table>
      <Tbody>
        <Tr>
          <Td {...props}>
            {children}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </BootstrapProvider>
);


describe('<Td />', () => {
  it('should render a <td> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('td').length).toBe(1);
    expect(renderedComponent.find('Td').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a className table-active', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'active',
    });
    expect(renderedComponent.find('td').hasClass('table-active')).toBe(true);
  });
});
