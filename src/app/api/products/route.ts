import axios from "axios";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Fetch all data from DummyJSON API
    const response = await axios.get("https://dummyjson.com/products?limit=0");
    const products = response.data.products;

    // Calculate total pages
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / limit);

    
    // Paginate the products
    const startIndex = (page - 1) * limit;
    const paginatedData = products.slice(startIndex, startIndex + limit);
    return new Response(
      JSON.stringify({
        data: paginatedData,
        current_data_length: paginatedData.length,
        current_page: page,
        total_page: totalPages,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}