import React from "react";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';
import { GET_COMMUNITIES } from '../../graphql/queries';
const CommunityDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic ID from the query object
  const { loading, error, data } = useQuery(GET_COMMUNITIES,{
    variables: { id: id },
  });
  
  
  if (loading) return <p>Loading...{id}</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { community } = data;
  return (
    <div>
      <Box
        position={"relative"}
        display={"inline-block"}
        width="100%"
        minHeight={"400px"}
        backgroundRepeat="no-repeat"
        background={`url("https://media.3speak.tv/user/${id}/cover.png")`}
      >
        <img
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            background: "#fff none repeat scroll 0 0",
            border: "2px solid #fff",
            borderRadius: "50px",
          }}
          src={`https://images.hive.blog/u/${id}/avatar`}
          width={"90px"}
          height={"90px"}
          alt="Picture of the author"
        />
        <Text
        position={'absolute'}
        bottom='10px'
        left={'150px'}
        fontSize='39px'
        textTransform={'uppercase'}
        lineHeight='38px'
        fontWeight={'200'}
        >{community.title}</Text>
        {/* <Image
          style={{
            position: 'absolute',
            bottom:'10px',
            left:'10px',
            background:'#fff none repeat scroll 0 0',
            border: '2px solid #fff',
            borderRadius:'50px',
          }}
          src={`https://images.hive.blog/u/${id}/avatar`}
          width={'90px'}
          height={'90px'}
          alt="Picture of the author"
        /> */}
      </Box>
      <Box
      padding={'15px'}
      >
        <div className="container-fluid">
          {community?.about}
        </div>
      </Box>
    </div>
  );
};

export default CommunityDetails;
