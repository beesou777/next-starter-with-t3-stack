import React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

interface PaginationWrapperProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  disabled?: boolean
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  disabled = false,
}) => {
  const getPages = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  const handleClick = (page: number) => {
    if (!disabled) {
      onPageChange(page)
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (!disabled && currentPage > 1) {
                handleClick(currentPage - 1)
              }
            }}

            aria-disabled={disabled || currentPage === 1}
            className={disabled || currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {getPages().map((page) => (
          <React.Fragment key={page}>
            {Math.abs(page - currentPage) < 2 || page === 1 || page === totalPages ? (
              <PaginationItem>
                <PaginationLink isActive={page === currentPage} onClick={() => handleClick(page)} disabled={disabled}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ) : (
              page === currentPage + 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )
            )}
          </React.Fragment>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              if (!disabled && currentPage < totalPages) {
                handleClick(currentPage + 1);
              } else {
                e.preventDefault(); 
              }
            }}
            aria-disabled={disabled || currentPage === totalPages}
            className={disabled || currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}

export default PaginationWrapper

