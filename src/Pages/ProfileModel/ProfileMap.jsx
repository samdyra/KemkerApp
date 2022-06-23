import React from "react";
import Navbar from "../../ComponentsV2/Navbar";
import style from "./ProfileMap.module.css";
import fotoIMG from "../../Assets/Images/logoKemker.png";

const ProfileMap = () => {
  const {
    headerWrapper,
    headerText,
    latarContainer,
    latarTitle,
    latarContent,
    hiasanStyle,
    bc,
  } = style;
  return (
    <div className={bc}>
      <Navbar></Navbar>
      <div className={headerWrapper}>
        <div className={headerText}>Clean Water Utility Mapping</div>
      </div>
      <div className={latarContainer}>
        <div className={latarTitle}>Introduction</div>
        <div className={latarContent}>
          Keseimbangan antara ketersediaan dan kebutuhan air dalam optimalisasi
          sumber daya air sangat diperlukan sehingga perencanaan aliran irigasi
          menjadi pekerjaan yang penting (Sambah, dkk., 2017). Dengan semakin
          bertambahnya jumlah penduduk maka diperlukan suatu sistem penyediaan
          air yang mampu menyediakan air dalam jumlah yang cukup bagi civitas
          akademika kampus ITB Jatinangor. Pendistribusian air ke
          fasilitas-fasilitas di kampus tersebut memerlukan penataan dan
          pemetaan jaringan pipa yang harus selalu up to date, terlebih jaringan
          utilitas air bersih di kawasan kampus ITB Jatinangor belum tersebar
          secara merata dari segi kualitas pipa dari pipa PVC menjadi pipa HDPE.
          Absennya peta eksisting utilitas air bersih yang rawan menjadi
          penghambat dalam pelaksanaan masterplan yakni peta perencanaan pipa
          air bersih, menjadikan optimalisasi penentuan jaringan irigasi harus
          dilakukan melalui rekognisi kondisi fisik lahan atau topografis
          kawasan serta kedekatan antarjaringan irigasi dengan daerah irigasi.
          Rekognisi tersebut akan menghasilkan peta eksisting pada referensi
          SRGI 2013 dengan epoch terbaru. <br></br> <br></br> Integrasi data
          spasial dengan Sistem Informasi Geografis (SIG) berperan menentukan
          prioritas dalam pendistribusian air irigasi berdasarkan kesesuaian
          lahan yang berguna dalam melakukan pemodelan dan perencanaan irigasi
          (Dewantoro, 2013). Data spasial tersebut dibangun berdasarkan
          teknologi GNSS (Global Navigation Satellite System) dengan unifikasi
          pengukuran terestris memberikan kemudahan dalam melakukan pemerataan
          utilitas air bersih. Pengaplikasian keilmuan Teknik Geodesi dan
          Geomatika yang diintegrasikan dalam pelaksanaan kuliah Kemah Kerja
          dalam membangun database kondisi pipa terkini dengan data atribut
          untuk mendukung perencanaan pembangunan pipa air bersih dengan
          pemetaan utilitas air bersih dapat digunakan untuk perencanaan
          jaringan pipa air bersih dan perawatan pipa agar dapat mempermudah
          petugas dalam melihat posisi perlengkapan pipa.
        </div>
      </div>
      <div className={hiasanStyle}>
        <img src={fotoIMG}></img>
      </div>
      <div className={latarContainer}>
        <div className={latarTitle}>Analisis</div>
        <div className={latarContent}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          eveniet quia, molestiae veritatis eligendi mollitia et minima
          incidunt, architecto ab eum quo dolorum accusantium sequi quis
          asperiores commodi nobis esse recusandae repudiandae aut. Dolore
          distinctio, quisquam nemo dicta ipsam vel! Quidem totam quibusdam vel
          suscipit ad in error odio ullam maiores quod earum nihil, perspiciatis
          repudiandae magnam. Eligendi odit facere unde enim, minus recusandae
          iusto nostrum, provident, architecto earum a id delectus tempore?
          Velit, harum. Nesciunt a, nihil voluptate odit ipsum sapiente eius
          atque minus. Quibusdam recusandae, temporibus inventore modi, tempora
          explicabo, cum corporis sapiente repudiandae dignissimos aliquam error
          quidem consequatur facere fugit odit. Possimus, ullam sit expedita
          itaque et veniam nisi odit alias dolores, culpa eaque officiis minima
          laboriosam cupiditate, voluptas delectus ipsam! Deserunt eius aut
          consequuntur tempora eaque ratione, rem saepe harum et id cum laborum,
          distinctio dolorem natus! Molestias assumenda, unde a eius sequi
          sapiente similique obcaecati eum quia culpa dolore earum placeat quis
          cumque dolor sunt maxime tempora fugiat veritatis distinctio tenetur.
          Quidem at ab labore, dolor provident quod officiis doloremque, minus
          maxime quia nobis consequuntur quos ex eligendi alias repellat iure
          laboriosam. Molestiae, dicta nisi rerum molestias numquam deleniti
          voluptatum quia perspiciatis totam cumque ea.
        </div>
      </div>
    </div>
  );
};

export default ProfileMap;
