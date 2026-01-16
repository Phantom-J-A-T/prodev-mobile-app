import { PropertyListingProps } from "@/interfaces";
import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";


const PropertyListing = ({ listings }: PropertyListingProps) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing: PropertyListingProps, key: number) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;