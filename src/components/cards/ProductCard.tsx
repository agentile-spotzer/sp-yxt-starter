
import React from "react";
import { Image, Link } from "@yext/pages/components";
import { ProductProfile } from "src/types/entities";
import { FeaturedCardComponent } from "src/models/cardComponent";

export const ProductCard: FeaturedCardComponent<ProductProfile> = function productCard(props): JSX.Element {
  const { profile } = props;

  return (
      <>
       {profile.primaryPhoto && (
          <div className="flex justify-center h-[187px] mb-8">
            <Image layout="fill" image={profile.primaryPhoto.image}/>
          </div>
        )}
        <div className="Heading Heading--sub mx-8">
          {profile.name}
        </div>
        {profile.richTextDescription && (
          <div className="mx-8 mt-4">
            {profile.richTextDescription}
          </div>
        )}
        {profile.c_primaryCTA && (
            <div className="flex mx-8 mt-8 mb-4">
              <Link className="self-start Button Button--secondary" cta={profile.c_primaryCTA} />
            </div>
          )}
      </>
  )
}