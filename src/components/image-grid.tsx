"use client";


import { SearchResult } from "@/app/gallery/page";
import {ReactNode} from "react";
const Max_Columns = 4;




export function ImageGrid({
    images,
     getImage,
    }: {
    images : SearchResult[];
     getImage: (imageData: SearchResult)=> ReactNode;
}){
    function getColumns(colIndex: number){
        return images.filter(
           (resource, idx) =>  idx % Max_Columns === colIndex
        );
     } 
     return (
        <div className="grid grid-cols-4 gap-4">
        {[
            getColumns(0),
            getColumns(1),
            getColumns(2),
            getColumns(3),
        ].map((columns, idx) =>( <div
        key={idx}
        className="flex flex-col gap-4">
     {columns.map(getImage)}
      
     
        </div>
        )
    )}
   
    </div>
     );

}