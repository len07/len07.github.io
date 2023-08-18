import React from 'react';
import '../../App.css';
import './Blog.css';
import { Outlet } from "react-router-dom";
import Footer from '../Footer';

export default function Blog() {
  return (
      <>
      <div>
            <Outlet/>
      </div>
      <Footer />

      </>
  )
};
