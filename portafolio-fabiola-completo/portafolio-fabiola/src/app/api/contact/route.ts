import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Por favor escribe tu nombre (mínimo 2 caracteres)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Por favor ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "admin@ejemplo.com";
    console.info(`[POST /api/contact] Para: ${contactEmail} | De: ${name} <${email}>`);

    return NextResponse.json(
      { ok: true, message: `¡Gracias, ${name}! Tu mensaje fue recibido correctamente.` },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error en el servidor al procesar el mensaje." },
      { status: 500 }
    );
  }
}
