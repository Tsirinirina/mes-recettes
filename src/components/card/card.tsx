import Image from "next/image";
import "./card.style.css";
import { ReactElement } from "react";
interface CardProps {
  title?: string;
  children?: any;
  body?: { content: string | ReactElement };
  image?: {
    path: string;
    alt?: string;
    width?: Number;
    height?: Number;
  };
  footer?: ReactElement<any> | any;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  body,
  image,
  footer,
}) => {
  return (
    <div className="container bg-light elevation-2 b-radius-sm ">
      {title && (
        <div className="header mb-2">
          <div className="title">{title}</div>
        </div>
      )}
      <div className="image">
        {image && (
          <Image
            alt={`${image.alt ? image.alt : "Image"}`}
            src={`/image/${
              image.path ? image?.path : "default-card-image.jpg"
            }`}
            width={image?.width ? image?.width : (250 as any)}
            height={image?.width ? image?.width : (250 as any)}
          />
        )}
      </div>
      {body && <div className="body">{body?.content}</div>}
      {children && <div className="child">{children}</div>}
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};
