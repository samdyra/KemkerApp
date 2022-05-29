import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./FloodModel.module.css";
import fotoIMG from "../../Assets/Images/logoKemker.png";

const FloodModel = () => {
  const { headerWrapper, headerText, latarContainer, latarTitle, latarContent, hiasanStyle, bc } = style;
  return (
    <div className={bc}>
      <Navbar></Navbar>
      <div className={headerWrapper}>
        <div className={headerText}>Flood Model</div>
      </div>
      <div className={latarContainer}>
        <div className={latarTitle}>Latar Belakang</div>
        <div className={latarContent}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eveniet quia, molestiae veritatis eligendi mollitia et minima incidunt, architecto ab
          eum quo dolorum accusantium sequi quis asperiores commodi nobis esse recusandae repudiandae aut. Dolore distinctio, quisquam nemo dicta ipsam vel!
          Quidem totam quibusdam vel suscipit ad in error odio ullam maiores quod earum nihil, perspiciatis repudiandae magnam. Eligendi odit facere unde enim,
          minus recusandae iusto nostrum, provident, architecto earum a id delectus tempore? Velit, harum. Nesciunt a, nihil voluptate odit ipsum sapiente eius
          atque minus. Quibusdam recusandae, temporibus inventore modi, tempora explicabo, cum corporis sapiente repudiandae dignissimos aliquam error quidem
          consequatur facere fugit odit. Possimus, ullam sit expedita itaque et veniam nisi odit alias dolores, culpa eaque officiis minima laboriosam
          cupiditate, voluptas delectus ipsam! Deserunt eius aut consequuntur tempora eaque ratione, rem saepe harum et id cum laborum, distinctio dolorem
          natus! Molestias assumenda, unde a eius sequi sapiente similique obcaecati eum quia culpa dolore earum placeat quis cumque dolor sunt maxime tempora
          fugiat veritatis distinctio tenetur. Quidem at ab labore, dolor provident quod officiis doloremque, minus maxime quia nobis consequuntur quos ex
          eligendi alias repellat iure laboriosam. Molestiae, dicta nisi rerum molestias numquam deleniti voluptatum quia perspiciatis totam cumque ea.
        </div>
      </div>
      <div className={hiasanStyle}>
        <img src={fotoIMG}></img>
      </div>
      <div className={latarContainer}>
        <div className={latarTitle}>Analisis</div>
        <div className={latarContent}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eveniet quia, molestiae veritatis eligendi mollitia et minima incidunt, architecto ab
          eum quo dolorum accusantium sequi quis asperiores commodi nobis esse recusandae repudiandae aut. Dolore distinctio, quisquam nemo dicta ipsam vel!
          Quidem totam quibusdam vel suscipit ad in error odio ullam maiores quod earum nihil, perspiciatis repudiandae magnam. Eligendi odit facere unde enim,
          minus recusandae iusto nostrum, provident, architecto earum a id delectus tempore? Velit, harum. Nesciunt a, nihil voluptate odit ipsum sapiente eius
          atque minus. Quibusdam recusandae, temporibus inventore modi, tempora explicabo, cum corporis sapiente repudiandae dignissimos aliquam error quidem
          consequatur facere fugit odit. Possimus, ullam sit expedita itaque et veniam nisi odit alias dolores, culpa eaque officiis minima laboriosam
          cupiditate, voluptas delectus ipsam! Deserunt eius aut consequuntur tempora eaque ratione, rem saepe harum et id cum laborum, distinctio dolorem
          natus! Molestias assumenda, unde a eius sequi sapiente similique obcaecati eum quia culpa dolore earum placeat quis cumque dolor sunt maxime tempora
          fugiat veritatis distinctio tenetur. Quidem at ab labore, dolor provident quod officiis doloremque, minus maxime quia nobis consequuntur quos ex
          eligendi alias repellat iure laboriosam. Molestiae, dicta nisi rerum molestias numquam deleniti voluptatum quia perspiciatis totam cumque ea.
        </div>
      </div>
    </div>
  );
};

export default FloodModel;
