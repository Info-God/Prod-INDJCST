import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ActiveIndexArchive, ArchiveIndexVolume, ArchivePaperDetailProps } from "../../../types/Api";
import { createAsyncThunk } from '@reduxjs/toolkit'; 
import { fetchPaperViews } from "../../axios/api/archive";

interface initialArchiveState {
    indexPage: ArchiveIndexVolume[]
    activeIndexPage: ActiveIndexArchive | null
    papers: ArchivePaperDetailProps[];
    activePaper: ArchivePaperDetailProps | null;
     paperViews: Record<number, { 
        total_views: number;
        unique_views: number;
        isLoading: boolean;
    }>;

}
const initialState: initialArchiveState = {
    indexPage: [],
    activeIndexPage: null,
    papers: [],
    activePaper: null,
     paperViews: {},
}

export const ArchiveSlice = createSlice({
    name: "ArchiveSlice",
    initialState,
    reducers: {
        setPaperList: (state, action: PayloadAction<ArchivePaperDetailProps[]>) => {
            state.papers = action.payload;
        },
        setActivePaper: (state, action: PayloadAction<ArchivePaperDetailProps>) => {
            state.activePaper = action.payload;
        },
        clearActivePaper: (state) => {
            state.activePaper = null;
        },
        setArchiveIndexVolume: (state, action: PayloadAction<ArchiveIndexVolume[]>) => {
            state.indexPage = action.payload;
        },
        setActiveIndexVolume: (state, action: PayloadAction<ActiveIndexArchive>) => {
            state.activeIndexPage = action.payload;
        },

        setPaperViews: (state, action: PayloadAction<{
            paperId: number;
            total_views: number;
            unique_views: number;
        }>) => {
            state.paperViews[action.payload.paperId] = {
                total_views: action.payload.total_views,
                unique_views: action.payload.unique_views,
                isLoading: false
            };
        },
        
        setPaperViewsLoading: (state, action: PayloadAction<number>) => {
            if (!state.paperViews[action.payload]) {
                state.paperViews[action.payload] = {
                    total_views: 0,
                    unique_views: 0,
                    isLoading: true
                };
            } else {
                state.paperViews[action.payload].isLoading = true;
            }
        },
        
        clearPaperViews: (state) => {
            state.paperViews = {};
        }

    }
})
export const { setArchiveIndexVolume, setActiveIndexVolume, clearActivePaper, setActivePaper, setPaperList ,setPaperViews,  
    setPaperViewsLoading,clearPaperViews } = ArchiveSlice.actions;

    export const fetchPaperViewsThunk = createAsyncThunk(
    'archiveSection/fetchPaperViews',
    async (paperId: number, { dispatch }) => {
        dispatch(setPaperViewsLoading(paperId));
        const data = await fetchPaperViews(paperId);
         console.log("📡 API Response data:", data);
        
        if (data && data.success) {
            dispatch(setPaperViews({
                paperId,
                total_views: data.total_views,
                unique_views: data.unique_views
            }));
        }
        
        return data;
    }
);

export default ArchiveSlice;
