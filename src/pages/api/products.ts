import { Product } from "@/types/Produc";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | { message: string }>
) {
  const { type } = req.query;

  if (req.method === "GET") {
    if (type) {
      const filterProducts = products.filter((product) => {
        return product.type === type;
      });
      res.status(200).json(filterProducts);
    } else {
      res.status(200).json(products);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

const products: Product[] = [
  {
    id: 1,
    name: "top 1",
    price: 19000,
    image: [
      "https://media.istockphoto.com/id/1397715908/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EC%BD%94%ED%8A%B8-%EC%98%B7%EA%B1%B8%EC%9D%B4%EB%A1%9C-%EB%B8%94%EB%9E%AD%ED%81%AC-%EB%B8%94%EB%9E%99-%ED%8B%B0%EC%85%94%EC%B8%A0-%EB%AA%A8%ED%98%95-%EC%95%9E%EB%A9%B4%EA%B3%BC-%EB%92%B7%EB%A9%B4%EB%B3%B4%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=_tdVL71n5ADl9ue_MYbZsjyWs5HM2tGb5wtMcXRXjvM=",
      "https://media.istockphoto.com/id/1151955708/ko/%EC%82%AC%EC%A7%84/%EB%82%A8%EC%9E%90%EC%9D%98-%ED%9D%B0%EC%83%89-%EB%B9%88-t-%EC%85%94%EC%B8%A0-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%96%91%EC%B8%A1%EC%97%90%EC%84%9C-%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%A7%88%EB%84%A4%ED%82%B9%EC%97%90-%EC%9E%90%EC%97%B0-%EB%AA%A8%EC%96%91-%EC%9D%B8%EC%87%84%EC%97%90-%EB%8C%80-%ED%95%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%B4%EB%9E%91-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=2048x2048&w=is&k=20&c=BTix5qG9KbTvz3KIR9s-y1o8Dk11HrcWN0EAjbcMYsU=",
      "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png",
    ],
    type: "tops",
  },
  {
    id: 2,
    name: "bottom 2",
    price: 29000,
    image: [
      "https://media.istockphoto.com/id/1393263127/ko/%EB%B2%A1%ED%84%B0/%ED%95%B4%EA%B5%B0-%EB%B8%94%EB%A3%A8-%EA%B3%B5%EC%9E%A5-%EC%9C%A0%EB%8B%88%ED%8F%BC-%EB%B0%94%EC%A7%80-%ED%85%9C%ED%94%8C%EB%A6%BF-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%B2%A1%ED%84%B0-%ED%8C%8C%EC%9D%BC.jpg?s=2048x2048&w=is&k=20&c=KT9okXgrPif6uoBFgXYoZv4j3cUyFGO8XALP05jyoQA=",
      "https://media.istockphoto.com/id/1463145509/ko/%EB%B2%A1%ED%84%B0/%EB%9F%AC%EB%8B%9D-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%B0%98%EB%B0%94%EC%A7%80-%EC%A0%80%EC%A7%80-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B2%A1%ED%84%B0-%ED%85%9C%ED%94%8C%EB%A6%BF-%ED%82%A5%EB%B3%B5%EC%8B%B1-%EB%86%8D%EA%B5%AC-%EB%A0%88%EC%8A%AC%EB%A7%81-%EB%AC%B4%EC%88%A0-%EB%B0%8F-%EC%B6%94%EC%A0%81-%ED%99%9C%EB%8F%99%EB%B3%B5-%EB%B0%98%EB%B0%94%EC%A7%80-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%A0%84%EB%A9%B4-%EB%B0%8F-%ED%9B%84%EB%A9%B4-%EB%B3%B4%EA%B8%B0%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%B3%BC%EB%9F%AC-%EB%B0%98%EB%B0%94%EC%A7%80-%EA%B0%9C%EB%85%90.jpg?s=2048x2048&w=is&k=20&c=Cq1woe-YTc0bbaEE_wur78_FLLmIQKz6xhMg8qBqZDQ=",
      "https://cdn.pixabay.com/photo/2016/03/31/19/24/clothes-1294974_1280.png",
    ],
    type: "bottoms",
  },
  {
    id: 3,
    name: "outerwear 3",
    price: 39000,
    image: [
      "https://cdn.pixabay.com/photo/2012/04/13/14/55/jacket-32714_640.png",
      "https://cdn.pixabay.com/photo/2012/04/12/19/05/coat-30208_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/10/39/coat-311026_640.png",
    ],
    type: "outerwear",
  },
  {
    id: 4,
    name: "top 4",
    price: 19000,
    image: [
      "https://media.istockphoto.com/id/1397715908/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EC%BD%94%ED%8A%B8-%EC%98%B7%EA%B1%B8%EC%9D%B4%EB%A1%9C-%EB%B8%94%EB%9E%AD%ED%81%AC-%EB%B8%94%EB%9E%99-%ED%8B%B0%EC%85%94%EC%B8%A0-%EB%AA%A8%ED%98%95-%EC%95%9E%EB%A9%B4%EA%B3%BC-%EB%92%B7%EB%A9%B4%EB%B3%B4%EA%B8%B0.jpg?s=2048x2048&w=is&k=20&c=_tdVL71n5ADl9ue_MYbZsjyWs5HM2tGb5wtMcXRXjvM=",
      "https://media.istockphoto.com/id/1151955708/ko/%EC%82%AC%EC%A7%84/%EB%82%A8%EC%9E%90%EC%9D%98-%ED%9D%B0%EC%83%89-%EB%B9%88-t-%EC%85%94%EC%B8%A0-%ED%85%9C%ED%94%8C%EB%A6%BF-%EC%96%91%EC%B8%A1%EC%97%90%EC%84%9C-%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%A7%88%EB%84%A4%ED%82%B9%EC%97%90-%EC%9E%90%EC%97%B0-%EB%AA%A8%EC%96%91-%EC%9D%B8%EC%87%84%EC%97%90-%EB%8C%80-%ED%95%9C-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9D%B4%EB%9E%91-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD.jpg?s=2048x2048&w=is&k=20&c=BTix5qG9KbTvz3KIR9s-y1o8Dk11HrcWN0EAjbcMYsU=",
      "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png",
    ],
    type: "tops",
  },
  {
    id: 5,
    name: "bottom 5",
    price: 29000,
    image: [
      "https://media.istockphoto.com/id/1393263127/ko/%EB%B2%A1%ED%84%B0/%ED%95%B4%EA%B5%B0-%EB%B8%94%EB%A3%A8-%EA%B3%B5%EC%9E%A5-%EC%9C%A0%EB%8B%88%ED%8F%BC-%EB%B0%94%EC%A7%80-%ED%85%9C%ED%94%8C%EB%A6%BF-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%B2%A1%ED%84%B0-%ED%8C%8C%EC%9D%BC.jpg?s=2048x2048&w=is&k=20&c=KT9okXgrPif6uoBFgXYoZv4j3cUyFGO8XALP05jyoQA=",
      "https://media.istockphoto.com/id/1463145509/ko/%EB%B2%A1%ED%84%B0/%EB%9F%AC%EB%8B%9D-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%B0%98%EB%B0%94%EC%A7%80-%EC%A0%80%EC%A7%80-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B2%A1%ED%84%B0-%ED%85%9C%ED%94%8C%EB%A6%BF-%ED%82%A5%EB%B3%B5%EC%8B%B1-%EB%86%8D%EA%B5%AC-%EB%A0%88%EC%8A%AC%EB%A7%81-%EB%AC%B4%EC%88%A0-%EB%B0%8F-%EC%B6%94%EC%A0%81-%ED%99%9C%EB%8F%99%EB%B3%B5-%EB%B0%98%EB%B0%94%EC%A7%80-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%A0%84%EB%A9%B4-%EB%B0%8F-%ED%9B%84%EB%A9%B4-%EB%B3%B4%EA%B8%B0%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%B3%BC%EB%9F%AC-%EB%B0%98%EB%B0%94%EC%A7%80-%EA%B0%9C%EB%85%90.jpg?s=2048x2048&w=is&k=20&c=Cq1woe-YTc0bbaEE_wur78_FLLmIQKz6xhMg8qBqZDQ=",
      "https://cdn.pixabay.com/photo/2016/03/31/19/24/clothes-1294974_1280.png",
    ],
    type: "bottoms",
  },
  {
    id: 6,
    name: "outerwear 6",
    price: 39000,
    image: [
      "https://cdn.pixabay.com/photo/2012/04/13/14/55/jacket-32714_640.png",
      "https://cdn.pixabay.com/photo/2012/04/12/19/05/coat-30208_640.png",
      "https://cdn.pixabay.com/photo/2014/04/03/10/39/coat-311026_640.png",
    ],
    type: "outerwear",
  },
  {
    id: 7,
    name: "top 7",
    price: 19000,
    image: [
      "/images/test-img.webp",
      "/images/test-img.webp",
      "/images/test-img.webp",
    ],
    type: "tops",
  },
  {
    id: 8,
    name: "bottom 8",
    price: 29000,
    image: [
      "/images/test-img.webp",
      "/images/test-img.webp",
      "/images/test-img.webp",
    ],
    type: "bottoms",
  },
  {
    id: 9,
    name: "outerwear 9",
    price: 39000,
    image: [
      "/images/test-img.webp",
      "/images/test-img.webp",
      "/images/test-img.webp",
    ],
    type: "outerwear",
  },
];
