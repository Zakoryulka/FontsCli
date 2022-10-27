package com.fontscli;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.net.Uri;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.FileProvider;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.IOException;

public class CopyImgToClipboardModule extends ReactContextBaseJavaModule {
    public CopyImgToClipboardModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CopyImgToClipboardModule";
    }


    @ReactMethod
    public void makeCopy(String fileUrl) throws IOException {
        Context context = getReactApplicationContextIfActiveOrWarn().getApplicationContext();
        ClipboardManager clipboard = (ClipboardManager) context.getSystemService(Context.CLIPBOARD_SERVICE);

        Uri copyUri = Uri.parse(fileUrl);
        Uri uri = FileProvider.getUriForFile(context,
                BuildConfig.APPLICATION_ID + ".provider", new File(copyUri.getPath()));
        ClipData clip = ClipData.newUri(context.getContentResolver(), "Photo", uri);
        clipboard.setPrimaryClip(clip);
    }
}
