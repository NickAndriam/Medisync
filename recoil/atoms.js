import { atom } from 'recoil'
import { v4 as uuidV4 } from 'uuid'

export const boxRefState = atom({
    key: 'boxRefState',
    default: null,
})

export const signUpFormAtom = atom({
    key: 'signUpForm',
    default: {
        id: "",
        fname: "",
        lname: "",
        dob: "",
        gender: "",
        tel: "",
        emergencyTel: "",
        address: "",
        email: "",
        medicalHistory: {
            bloodType: "",
            allergies: "",
            pastMedicalConditions: "",
            familyMedicalHistory: "",
            surgicalHistory: "",
            medications: ""
        },

    }
})