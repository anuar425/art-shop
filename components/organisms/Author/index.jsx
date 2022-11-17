import { Image } from "@/components/atoms";
import Link from "next/link";

function Author() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 p-0">
            <Image
              src="/images/author/ArmatBektas-1.jpg"
              alt="armat-bektas"
              className="w-100 mb-3"
            />
          </div>
          <div className="col-7 about__author-text-container py-5">
            <h1 className="mb-3">Armat Bektas</h1>
            <p className="w-100">
              Artist, sculptor. Member of the Artists’ Union of the Republic of
              Kazakhstan. In 1985 he graduated from Almaty artist’s college,
              faculty of miniature painting, and in 1992 – Almaty State
              Theatre-Artistic Institute named after T.Zhurgenov, faculty of
              monumental painting. Participant of numerous international
              conferences and exhibitions, including personal exhibitions in the
              State Museum of Arts of the Republic of Kazakhstan named after
              A.Kasteyev, gallery of Foundation of the First President of the
              Republic of Kazakhstan, galleries in CIS, Germany, France, United
              Kingdom, South Africa, Russia, Japan, Italy, UN headquarters in
              the USA, Mexico, Netherlands. Since 2011 he is the lecturer of Art
              and sculpture, artistic faculty of Kazakh National University of
              Arts. The works of Armat are at state and private collections in
              different countries of the world. <br /> <br /> Armat Bektas
              studied the nature of lines for many years which he was searching
              for in the art of great artists: Malevich, Kandinskii, Picasso,
              and in the history of the Great Steppe – petroglifs, tribe signs
              of nomads, and runic writing. The detailed study of the nature of
              lines led Armat to creation of his own style of the “language of
              lines”, thanks to which Ernst Neizvestnyi, the world famous
              sculpture, for example, named Armat as the founder of new style of
              linear graphics of symbols and signs. Actually, the new concept of
              lines in art, created by Armat Bektas, gives the new definition of
              relationships in the society, culture and nature. The artist in
              his works by the lines shows the steppe architecture. Armat’s
              paintings really have the philosophical meaning, since by the
              author’s language of lines he tries to show and transfer the unity
              of all people, religions and nationalities.
            </p>
            {/* <h5>ОБРАЗОВАНИЕ:</h5>
                <p>
                  Средняя школа искусства, г. Алматы <br /> Государственный
                  театрально-художественный институт, факультет монументальной
                  живописи, г. Алматы <br />
                  Преподаватель живописи при Казахском Национальном Университете
                  Искусств, г. Астана
                </p>
                <h5>ВЫСТАВКИ:</h5>

                {data.exhibitions.map((exhibition, idx) => (
                  <>
                    <div className="row">
                      <div className="col-auto">
                        <p>{exhibition.year}</p>
                      </div>
                      <div className="col">
                        <p
                          style={{
                            whiteSpace: "pre-line",
                          }}
                        >
                          {exhibition.description}
                        </p>
                      </div>
                    </div>
                  </>
                ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Author;
