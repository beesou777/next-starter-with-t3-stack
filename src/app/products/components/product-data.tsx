"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import PaginationWrapper from "@/components/pagination/wrapper"
import { useQuery } from "@tanstack/react-query"

interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
}

interface ApiResponse {
  data: Product[]
  current_data_length: number
  current_page: number
  total_page: number
}

export default function ProductPagination() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const page = Number(searchParams.get("page")) || 1

  const fetchProducts = async (page: number) => {
    const response = await fetch(`/api/products?page=${page}&limit=10`)
    if (!response.ok) throw new Error("Failed to fetch products")
    return response.json() as Promise<ApiResponse>
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
  })

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`)
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {isLoading
          ? Array(10)
            .fill(0)
            .map((_, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <Skeleton className="h-4 w-[250px]" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-[200px] w-full" />
                </CardContent>
              </Card>
            ))
          : data?.data.map((product) => (
            <Card key={product.id} className="w-full">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <p className="font-bold">${product.price.toFixed(2)}</p>
                <Image
                  src={product.thumbnail || "/placeholder.svg"}
                  alt={product.title}
                  width={250}
                  height={160}
                  className="mt-2 w-full h-40 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
      </div>
      {data && (
        <div className="flex justify-center mt-4">
          <PaginationWrapper
            totalPages={data.total_page}
            currentPage={data.current_page}
            onPageChange={handlePageChange}
            disabled={isLoading}
          />
        </div>
      )}
    </div>
  )
}

