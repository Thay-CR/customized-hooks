// src/hooks/usePagination.ts

import { useState, useEffect } from 'react';

interface PaginationOptions {
  initialPage?: number;
  itemsPerPage?: number;
}

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  pageItems: T[];
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export function usePagination<T>(
  data: T[],
  options: PaginationOptions = {}
): PaginationResult<T> {
  const { initialPage = 1, itemsPerPage = 10 } = options;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(Math.ceil(data.length / itemsPerPage));
  const [pageItems, setPageItems] = useState<T[]>([]);

  useEffect(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const items = data.slice(startIdx, endIdx);
    setPageItems(items);
  }, [currentPage, data, itemsPerPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [data, itemsPerPage, currentPage, totalPages]);

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    pageItems,
    setPage,
    nextPage,
    prevPage,
  };
}
