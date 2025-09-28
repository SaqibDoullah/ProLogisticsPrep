import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock components to isolate App component for testing
jest.mock('@/components/Navbar', () => () => <nav>Navbar</nav>);
jest.mock('@/components/Footer', () => () => <footer>Footer</footer>);
jest.mock('@/pages/Homepage', () => () => <div>Homepage</div>);
jest.mock('@/pages/About', () => () => <div>About</div>);
jest.mock('@/pages/Services', () => () => <div>Services</div>);
jest.mock('@/pages/Pricing', () => () => <div>Pricing</div>);
jest.mock('@/pages/Contact', () => () => <div>Contact</div>);
jest.mock('@/pages/Blog', () => () => <div>Blog</div>);
jest.mock('@/pages/BlogPost', () => () => <div>BlogPost</div>);

describe('App component', () => {
  test('renders Navbar and Footer on all pages', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('renders Homepage for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Homepage')).toBeInTheDocument();
  });

  test('renders About page for the /about path', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders Services page for the /services path', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('renders Pricing page for the /pricing path', () => {
    render(
      <MemoryRouter initialEntries={['/pricing']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });

  test('renders Contact page for the /contact path', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders Blog page for the /blog path', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  test('renders BlogPost page for a dynamic blog slug', () => {
    render(
      <MemoryRouter initialEntries={['/blog/my-first-post']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('BlogPost')).toBeInTheDocument();
  });
});
