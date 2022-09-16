import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorMain from '../CalculatorMain';

describe('Calculator Main Page', () => {
  afterEach(cleanup);

  it('renders calculator main page correctly', () => {
    const tree = renderer.create(<CalculatorMain />);
    expect(tree).toMatchSnapshot();
  });

  it('should display the calculator component on the page', () => {
    render(<CalculatorMain />);
    const calcContainer = document.getElementsByClassName('calc-container');
    expect(calcContainer).toBeTruthy();
  });
});
