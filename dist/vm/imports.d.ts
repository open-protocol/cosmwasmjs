import { Instance } from "./instance.js";
export declare function doDbRead(instance: Instance, keyPtr: number): number;
export declare function doDbWrite(instance: Instance, keyPtr: number, valuePtr: number): void;
export declare function doDbRemove(instance: Instance, keyPtr: number): void;
export declare function doAddrValidate(instance: Instance, sourcePtr: number): number;
export declare function doAddrCanonicalize(instance: Instance, sourcePtr: number, destinationPtr: number): number;
export declare function doAddrHumanize(instance: Instance, sourcePtr: number, destinationPtr: number): number;
export declare function doSecp256k1Verify(instance: Instance, hashPtr: number, signaturePtr: number, pubkeyPtr: number): number;
export declare function doSecp256k1RecoverPubkey(instance: Instance, hashPtr: number, signaturePtr: number, recoverParam: number): number;
export declare function doEd25519Verify(instance: Instance, messagePtr: number, signaturePtr: number, pubkeyPtr: number): number;
export declare function doEd25519BatchVerify(instance: Instance, messagesPtr: number, signaturesPtr: number, publicKeysPtr: number): number;
export declare function doDebug(instance: Instance, messagePtr: number): void;
export declare function doAbort(instance: Instance, messagePtr: number): void;
export declare function doQueryChain(instance: Instance, requestPtr: number): number;
export declare function doDbScan(instance: Instance, startPtr: number, endPtr: number, order: number): number;
export declare function doDbNext(instance: Instance, iteratorId: number): number;