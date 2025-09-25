"use client";

import classes from './image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const fileInputRef = useRef();
    const [image, setImage] = useState(null);

    function handleFileInputClick() {
        fileInputRef.current.click();
    }

    function handleFileInputChange(event) {
        const file = event.target.files[0];
        
        if (!file) {
            setImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <div className={classes.preview}>
                <p className={classes.text}>No image selected</p>
                {image && <Image src={image} alt={label} fill/>}
            </div>
            <label htmlFor={name} className={classes.label}>{label}</label>
            <input 
                className={classes.input}
                type="file" 
                id={name} 
                name={name}
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleFileInputChange}
                required
            />
            <div className={classes.controls}>
                <button className={classes.button} onClick={handleFileInputClick}>Upload</button>
            </div>
        </div>
    );
}