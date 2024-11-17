export const parseImageUrl = (apiImage: string): string => {
  return `${process.env.NEXT_PUBLIC_API_HOST}/storage/${apiImage}`;
};
