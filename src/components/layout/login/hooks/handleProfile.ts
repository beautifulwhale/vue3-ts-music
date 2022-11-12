import { useUserState } from '../../../../store/user';
import { LStorage } from '../../../../utils/storage';
import { ProfileType } from '../../../../model/user';

export default (isSave: boolean, cookie?: string, profile?: ProfileType) => {
    const store = useUserState();
    if (isSave) {
        LStorage.set('cookie', cookie);
        LStorage.set('avatarUrl', profile!.avatarUrl);
        LStorage.set('nickname', profile!.nickname);
        store.saveCookie(cookie as string);
        store.saveProfile(profile as ProfileType);
    } else {
        LStorage.delete('cookie');
        LStorage.delete('avatarUrl');
        LStorage.delete('nickname');
        store.saveCookie('');
        store.saveProfile({});
    }
}