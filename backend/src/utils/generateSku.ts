export const generateSku = async (ProductModel: any) => {
    const lastProduct = await ProductModel.findOne().sort({createdAt: -1});

    if (!lastProduct || !lastProduct.sku){
        return 'SKU001';
    }

    const lastNumber = parseInt(lastProduct.sku.replace('SKU',''),10);
    const nextNumber = lastNumber + 1;

    return 'SKU' + nextNumber.toString().padStart(3,'0');
};