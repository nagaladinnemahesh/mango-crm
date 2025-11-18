import bcrypt from 'bcryptjs';

export const hashPin = async(pin: string) => {
    const saltRounds = parseInt(process.env.PIN_SALT_ROUNDS || '10', 10);
    return bcrypt.hash(pin, saltRounds);
}

export const comparePin = async(pin: string, pinHash: string) => {
    return bcrypt.compare(pin, pinHash);
};