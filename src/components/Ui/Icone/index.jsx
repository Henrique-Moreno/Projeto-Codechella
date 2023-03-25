import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Icone({children}) {
  return (
    <div>
      <FaChevronLeft />{children}<FaChevronRight />
    </div>
  )
}
