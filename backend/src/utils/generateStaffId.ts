export const generateStaffId = async (UserModel: any) => {
    const lastUser = await UserModel
    .findOne({})
    .sort({createdAt: -1})
    .lean();

    if(!lastUser || !lastUser.staffId){
        return 'STF001';
    }

    const lastNumber = parseInt(lastUser.staffId.replace('STF',''),10);
    const nextNumber = lastNumber + 1;

    return 'STF' + nextNumber.toString().padStart(3,"0");
}