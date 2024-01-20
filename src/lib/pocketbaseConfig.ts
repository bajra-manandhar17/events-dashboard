import PocketBase from 'pocketbase';
import { PocketbaseInstance } from '../constants/environment';

const pbInstance = new PocketBase(PocketbaseInstance);

export default pbInstance;