import { h } from 'preact';
import { expect } from 'chai';

import Home from '../../../src/containers/home';

describe('containers/home', () => {
	it('should show the home text', () => {
		const home = <Home/>;
		expect(home).to.contain(<h1>Home</h1>);
		expect(home).to.contain('Home component');
	});
});
