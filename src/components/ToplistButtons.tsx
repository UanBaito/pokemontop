import LoadingButton from '@mui/lab/LoadingButton';
import { Backdrop, CircularProgress } from '@mui/material';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import * as htmlToImage from "html-to-image"
import download from 'downloadjs'

export default function ToplistButtons({handleClear}: {handleClear: any}) {
    
    const [loadingState, setLoadingState] = useState(false)
    
    const downloadNode = document.getElementById("downloadNode")!

    async function handleDownload() {
        setLoadingState(true)
        setTimeout(async () => {
            try {
                let dataUrl = await htmlToImage.toPng(downloadNode, {backgroundColor: "#2c2a2a"})
                download(dataUrl, 'toplist.png');
                setLoadingState(false)
            } catch {
                setLoadingState(false)
                console.log("error")
            }
        }, 400)
        
    }

    return (
        <div className='ToplistButtons-container'>
            <LoadingButton variant="outlined" size="small" sx={{width: 130}} color="secondary" onClick={handleClear} startIcon={<FontAwesomeIcon icon={faTrashCan} />}>
                Clear list 
            </LoadingButton>
            <LoadingButton  loading={loadingState} loadingPosition="start" variant="contained" color="primary" size="small" sx={{width: 130, gridColumnEnd: -1, justifySelf: "flex-end"}} onClick={() => {handleDownload()}} startIcon={<FontAwesomeIcon icon={faDownload}/>}>
                Download
            </LoadingButton>
            <Backdrop sx={{ color: '#fff', zIndex: 999}} open={loadingState}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

