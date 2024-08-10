import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apislice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: PRODUCTS_URL }),
      providesTags: ["products"],
      keepUnusedDataFor: 5,
    }),

    getProductDetails: builder.query({
      query: (productID) => ({ url: `${PRODUCTS_URL}/${productID}` }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: () => ({ url: PRODUCTS_URL, method: "POST" }),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
    }),

    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUploadProductImageMutation,
} = productsApiSlice;
