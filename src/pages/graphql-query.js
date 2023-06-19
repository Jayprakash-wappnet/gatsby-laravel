import React from "react";
import { graphql } from "gatsby";

const OffersPage = ({ data }) => {
  const allOffers = data.allOffer.edges;

  return (
    <div>
      {allOffers.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.promocode_name}</h3>
          <p>Promo Code: {node.promocode}</p>
          <p>Status: {node.status}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allOffer {
      edges {
        node {
          id
          promocode_name
          promocode
          status
        }
      }
    }
  }
`;

export default OffersPage;
