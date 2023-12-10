import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async({username, password}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/login', {username, password})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const submitReq = createAsyncThunk('auth/submitReq', async({userId, location, description, photo }, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/tenant', {userId, location, description, photo})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const staffSearch = createAsyncThunk('auth/staffSearch', async({status, apartment, location, dateStart, dateEnd }, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/staff', {status, apartment, location, dateStart, dateEnd})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const adminAddTenant = createAsyncThunk('auth/adminAddTenant', async({username, password, name, apartment, phone, email }, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/admin/add-tenant', {username, password, name, apartment, phone, email})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const adminEditTenant = createAsyncThunk('auth/adminEditTenant', async({selectUserId, apartment }, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/admin/edit-tenant', {selectUserId, apartment})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const adminDelTenant = createAsyncThunk('auth/adminDelTenant', async({selectUserId}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/admin/del-tenant', {selectUserId})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const adminAddStaff = createAsyncThunk('auth/adminAddStaff', async({username, password, name, phone, email}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/admin/add-staff', {username, password, name, phone, email})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const adminDelStaff = createAsyncThunk('auth/adminDelStaff', async({selectUserId}, thunkAPI) => {
    try {
        const res = await axios.post('http://localhost:8080/admin/del-staff', {selectUserId})
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

const initialState = {
    userId: '',
    admin: '',
    staff: '',
    tenant: '',
    isLoggedIn: false,
    loading: false,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.userId = ''
            state.admin = '';
            state.staff = '';
            state.tenant = '';
            state.isLoggedIn = false
            state.loading = false
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder           
            .addCase(login.fulfilled, (state, action) => {
                state.userId = action.payload.user_id
                
                if(action.payload.type === 'admin')
                    state.admin = 'admin'
                else if(action.payload.type === 'staff'){
                    state.staff = 'staff'
                }
                else if(action.payload.type === 'tenant'){
                    state.tenant = 'tenant'
                }
                state.isLoggedIn = true
                state.loading = false
                state.error = null
            })
            .addCase(login.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(submitReq.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(submitReq.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(submitReq.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(staffSearch.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(staffSearch.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(staffSearch.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(adminAddTenant.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(adminAddTenant.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(adminAddTenant.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(adminEditTenant.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(adminEditTenant.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(adminEditTenant.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(adminDelTenant.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(adminDelTenant.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(adminDelTenant.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })
            
            .addCase(adminAddStaff.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(adminAddStaff.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(adminAddStaff.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })

            .addCase(adminDelStaff.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
            })
            .addCase(adminDelStaff.pending, (state, action) =>{
                state.loading = true
            })
            .addCase(adminDelStaff.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.error = action.payload
            })


    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer