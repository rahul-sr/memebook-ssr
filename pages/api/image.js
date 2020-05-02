import fetch from "isomorphic-unfetch";
import { parse } from "url";
const sharp = require('sharp');

export default async (req, res) => {
  const {
    query: { url }
  } = parse(req.url || "", true);
  try {
    const imgUrl = `https://i.redd.it${url}`;
    const r = await fetch(imgUrl,
      {
        headers: {
          "content-type": "image/png",
        }
      }
    );
    res.setHeader("content-type", r.headers.get("content-type"));
    //storageResponse.pipe(imageOptimisation(req)).pipe(res);
    r.body
    .pipe(imageOptimisation(req))
    .pipe(res);
  } catch (err) {
    res.end();
  }

};

const imageOptimisation = function(req) {
  const optimisation = sharp();
  optimisation.resize(350);
 if (req.headers.accept && req.headers.accept.match('image/webp')) {
    optimisation.webp({force:true, quality:50, alphaQuality: 50, reductionEffort: 6});
  } else {
    optimisation.jpeg({
      progressive: true
    });
  }
  return optimisation;
};