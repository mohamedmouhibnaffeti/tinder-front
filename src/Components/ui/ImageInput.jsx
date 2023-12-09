import React from "react";
import FileBase from 'react-file-base64'

const ImageInput = ({Images, AddImage, index}) => {
    return (
        <div className={`${ (Images && Images[index]) ? 'border-none' : 'border-dashed'} border-2 border-purple-700 w-52 h-64 rounded-3xl justify-center items-center`}>
            { !(Images && Images[index]) ? 
                <div className="mt-28 text-white" >
                    <FileBase type="file" multiple={false} onDone={({ base64 })=>AddImage(base64)} />
                </div>
                :
                <div className="flex w-inherit justify-center items-center">
                    <img src={`${Images[index]}`} alt="" className="bg-red object-fit rounded-3xl self-center" />
                </div>
            }
        </div>
    )
}

export default ImageInput