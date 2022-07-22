import React, {useEffect, useState} from 'react';
import {
    Sidebar,
    Title,
    Widget,
    Category,
    Categories,
    Num,
    List,
    NewestPost,
    ImageWrapper,
    PostImage,
    ImageOverlay,
    PostContent,
    PostTitle,
    PostDescription,
    PostDate,
    Badge,
    BadgeWrapper
} from "./styles";
import SearchField from "../common/search-field";
import NPIronImage from "../../assets/Blogposts/newest.jpg";
import moment from "moment-jalaali"
import Link from 'next/link'

const SideBar = ({setSearch,search,posts}) =>{
    const categories = [
        { _id: 1, title: "آهن آلات", count: 55 },
        { _id: 2, title: "آهن آلات", count: 55 },
        { _id: 3, title: "آهن آلات", count: 55 },
        { _id: 4, title: "آهن آلات", count: 55 },
    ];
    const badges = [
        { _id: 1, title: "آهن" },
        { _id: 2, title: "آهن" },
        { _id: 3, title: "آهن" },
        { _id: 4, title: "آهن آهن آهن" },
        { _id: 1, title: "آهن" },
        { _id: 2, title: "آهنآهن" },
        { _id: 3, title: "آهن" },
        { _id: 4, title: "آهن" },
    ];


    const copyPosts = [...posts];

    return(
        <Sidebar>
            <Widget>
                <Title header2>جستجو</Title>
                <SearchField value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </Widget>
            <Widget>
                <Title header2>دسته بندی ها</Title>
                <Categories>
                    {categories.map((item) => (
                        <Category key={item._id}>
                            <span>{item.title}</span> (<Num>{item.count}</Num>)
                        </Category>
                    ))}
                </Categories>
            </Widget>
            <Widget>
                <Title header2>پست های جدید</Title>
                <List>
                    {copyPosts.splice(3).map((item) => (
                        <NewestPost key={item._id}>
                            <Link href="/posts/[id]" as={`/posts/${item._id}`}>
                                <a>
                                    <ImageWrapper>
                                        <PostImage src={NPIronImage} layout="fill" />
                                        <ImageOverlay />
                                    </ImageWrapper>
                                    <PostContent>
                                        <PostTitle>{item.fa.name}</PostTitle>
                                        <PostDescription>{item.fa.description}</PostDescription>
                                        <PostDate>{moment(item.updatedAt).format("jYYYY/jMM/jDD")}</PostDate>
                                    </PostContent>
                                    </a>
                                </Link>
                        </NewestPost>
                    ))}
                </List>
            </Widget>
            <Widget>
                <Title header2>تگ ها</Title>
                <BadgeWrapper>
                    {posts.map((badge) => {
                        const jsxBadge = badge.fa.tags.map((e,i)=>(
                            <Badge key={i}>{e}</Badge>
                        ))
                        return jsxBadge;
                    })}
                </BadgeWrapper>
            </Widget>
        </Sidebar>
    )
}
export default SideBar;